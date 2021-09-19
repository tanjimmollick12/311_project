<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ProductExport implements FromCollection,WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function headings():array{
        return [
            'id',
            'name',
            'Category',
            'Sub_Category',
            'price',
            'In_Stock',
            'Description',
            'Offer'
        ];
    }
    public function collection()
    {
        return collect(Product::getProducts());
    }
}
