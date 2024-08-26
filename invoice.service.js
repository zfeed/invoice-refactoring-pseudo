import { Invoice } from './domain/invoice';

class InvoiceApplicationService {
    constructor(prisma) {
        this.prisma = prisma;
    }

    makeApproved() {
        const data = this.prisma.invoice.findUnique();

        const invoice = Invoice(data);

        invoice.makeApproved();

        this.prisma.invoice.update(invoice.data);

        // here handle the side effects like sending email, integrating with other modules etc
    }

    makePedning() {
        const data = this.prisma.invoice.findUnique();

        const invoice = Invoice(data);

        invoice.makePedning();

        this.prisma.invoice.update(invoice.data);

        // here handle the side effects like sending email, integrating with other modules etc
    }

    makeDraft() {
        const data = this.prisma.invoice.findUnique();

        const invoice = Invoice(data);

        invoice.makePedning();

        this.prisma.invoice.update(invoice.data);

        // here handle the side effects like sending email, integrating with other modules etc
    }

    update(data) {
        const data = this.prisma.invoice.findUnique();

        const invoice = Invoice(data);

        invoice.update(data);

        this.prisma.invoice.update(invoice.data);

        // here handle the side effects like sending email, integrating with other modules etc
    }
}
