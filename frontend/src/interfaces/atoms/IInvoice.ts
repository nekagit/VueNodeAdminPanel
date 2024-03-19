import type { IBaseColumn } from "@/service/tableService"

// Interface for the invoice document
export interface IInvoice extends IBaseColumn {
  number: number
  customer: string // Reference to Customer ObjectId
  date?: Date
  invoiceTotal: number
}

// Interface for the invoice line document
export interface IInvoiceLine {
  id: string // MongoDB ObjectId
  invoice: string // Reference to Invoice ObjectId
  product: string // Reference to Product ObjectId
  unitPrice: number
  quantity: number
  lineTotal: number
}
