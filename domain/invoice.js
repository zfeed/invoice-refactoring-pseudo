import { InvoiceDraft } from './invoice.draft';
import { InvoicePending } from './invoice.pending';
import { InvoiceApproved } from './invoice.approved';

export class Invoice {
    constructor(data) {
        this.data = data;

        switch (data.status) {
            case 'DRAFT':
                this.state = new InvoiceDraft(this);
                break;
            case 'APPROVED':
                this.state = new InvoiceApproved(this);
                break;
            case 'PENDING':
                this.state = new InvoicePending(this);
                break;
            default:
                throw new Error('Unsupported invoice status');
        }
    }

    update(data) {
        return this.state.update(data);
    }

    makeApproved() {
        return this.state.makeApproved();
    }

    makeDraft() {
        return this.state.makeDraft();
    }

    makePending() {
        return this.state.makeDraft();
    }
}
