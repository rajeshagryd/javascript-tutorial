module.exports = function replaceHtml(template, prod) {
    let product = template.replace('{{%PRODUCTNAME%}}', prod.name)
    product = product.replace('{{%CATEGORY%}}', prod.category)
    product = product.replace('{{%DESCRIPTION%}}', prod.description)
    product = product.replace('{{%PRICE%}}', prod.price)
    product = product.replace('{{%ID%}}', prod.id)
    return product
}