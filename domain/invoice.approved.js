import { InvoicePending } from './invoice.pending.js';
import { InvoiceDraft } from './invoice.draft.js';

export class InvoiceApproved {
    constructor(invoice) {
        this.invoice = invoice;
    }

    update(data) {
        throw new Error(
            'Cannot update an approved invoice. Move it to pending or draft first'
        );
    }

    makeApproved() {
        return this.invoice;
    }

    makeDraft() {
        // some validation logic that require the invoice to be transfered from approved to pending state

        // transfer the invoice from approved to draft state
        this.invoice.state = new InvoiceDraft(this.invoice);

        return this.state.makeDraft();
    }

    makePending() {
        // some validation logic that require the invoice to be transfered from approved to pending state

        // transfer the invoice from approved to pending state
        this.invoice.state = new InvoicePending(this.invoice);

        return this.invoice;
    }
}
