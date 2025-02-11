import { Request, Response } from "express"


export function listProducts(req: Request, res: Response) {
    res.send('listProduct')
}

export function getProductById(req: Request, res: Response) {
    res.send('getProductById')
}

export function deleteProduct(req: Request, res: Response) {
    console.log('req.body')
}

export function createProduct(req: Request, res: Response) {
    res.send('updateProduct')
}

export function updateProduct(req: Request, res: Response) {
    res.send('deleteProduct')
}
