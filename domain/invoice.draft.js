import { InvoicePending } from './invoice.pending.js';

export class InvoiceDraft {
    constructor(invoice) {
        this.invoice = invoice;
    }

    update(data) {
        // logic related to updating invoice in status draft

        return this.invoice;
    }

    makeApproved() {
        throw new Error(
            'Cannot approve a draft invoice, Firstly you need to make it pending'
        );
    }

    makeDraft() {
        return this.invoice;
    }

    makePending() {
        // some validation logic that require the invoice to be transfered from draft to pending

        // transfer the invoice from pending to approved state
        this.invoice.state = new InvoicePending(this.invoice);

        return this.invoice;
    }
}
