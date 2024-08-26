import { InvoiceApproved } from './invoice.approved.js';
import { InvoiceDraft } from './invoice.draft.js';

export class InvoicePending {
    constructor(invoice) {
        this.invoice = invoice;
    }

    update(data) {
        // logic related to updating invoice in status pending

        return this.invoice;
    }

    makeApproved() {
        // some validation logic that require the invoice to be transfered from pending to approved

        // transfer the invoice from pending to approved state
        this.invoice.state = new InvoiceApproved(this.invoice);

        return this.invoice;
    }

    makeDraft() {
        // some validation logic that require the invoice to be transfered from pending to draft

        // transfer the invoice from pending to draft state
        this.invoice.state = new InvoiceDraft(this.invoice);

        return this.state.makeDraft();
    }

    makePending() {
        return this.invoice;
    }
}
