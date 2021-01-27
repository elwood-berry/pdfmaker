/*
01/27/2021 - 11:43 AM 
B: 'if we have that part as HTML node' (He is refering to the product right column display - "server-side/_assets/html/product-right-col.html")
B: 'then we have feature we can change the content like this'
*/

let defaultSimpleQuoteProductDescription = this.getDefaultSimpleQuoteProductDescription(item, product, attributes);

node.stack.push(defaultSimpleQuoteProductDescription);


/*
01/27/2021 - 11:44 AM 
B: 'this is how we push the node'
*/

getDefaultSimpleQuoteProductDescription(item, product, attributes){

    let showAttribSize = '';
    let showAttribColor = '';

    if (item.showAttribSize == '1' && attributes.sizes) {
        showAttribSize = `<tr><td style="width:150px;"><b>Sizes:</b></td><td style="width:510px;">${attributes.sizes.join(', ')}</td></tr>`;
    }
    if (item.showAttribColor == '1' && attributes.colors) {
        showAttribColor = `<tr><td style="width:150px;"><b>Colors:</b></td><td style="width:510px;">${attributes.colors.join(', ')}</td></tr>`;
    }

    let showPriceBreak = this.priceBreakTable(item, product);
    let defaultSimpleQuoteProductDescription = htmlToPdfmake(`
        <table style="width:660px;" align="left">
            <tr>
                <td colspan="2"><h1>${item.productName}</h1></td>
            </tr>
            <tr>
                <td colspan="2"><p>${item.customerDescription}</p></td>
            </tr>
            <tr>
                <td>Product Number</td>
                <td style="width:100px;">${item.itemCode}</td>
            </tr>
            ${showAttribSize}
            ${showAttribColor}
        </table>
        <br>
        ${showPriceBreak}
    `, 
        {
        tableAutoSize:true
        }
    );

    return defaultSimpleQuoteProductDescription;
}

/*
01/27/2021 - 11:44 AM 
B: 'advance\src\app\features\documents\templates\simple-quote.document.ts'
B: 'you can see this code here'
B: 'Order Management -> Orders -> open any order -> documetns tab -> simple quote'
*/