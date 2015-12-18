
var ProductPhoto = react.createClass({
    render:function(){
        
    }
})

var ProductContainer = React.createClass({
    render:function(){
        
    }
})



var ProductCategoryRow = React.createClass({
    render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
});

var ProductRow = React.createClass({
    render: function() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
        return (
 
            <tr>
                <td>{name}</td>
                <td><img src={this.props.product.url}</td>
            </tr>
        );
    }
});


var ProductTable = React.createClass({
    render: function() {
        render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                //rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
           
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }



var Site = React.createClass({
    render: function() {
        return (
            <div>
                <Headline />
                <GreetingPhoto />
                <ProductTable products={this.props.products} />
                <Footer  />
            </div>
        );
    }
});

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football', url: 'https://en.wikipedia.org/wiki/Stop_sign#/media/File:STOP_sign.jpg'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball', url: 'https://en.wikipedia.org/wiki/Stop_sign#/media/File:STOP_sign.jpg'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball', url: 'https://en.wikipedia.org/wiki/Stop_sign#/media/File:STOP_sign.jpg'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch', url: 'https://en.wikipedia.org/wiki/Stop_sign#/media/File:STOP_sign.jpg'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5', url: 'https://en.wikipedia.org/wiki/Stop_sign#/media/File:STOP_sign.jpg'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', url: 'https://en.wikipedia.org/wiki/Stop_sign#/media/File:STOP_sign.jpg'}
];





var Test1 = React.createClass({
    render: function() {
        <div>
        Hello World!
      </div>
    }
})

ReactDOM.render(
    <Test1 products={PRODUCTS} />,
    document.getElementById('container')
);

/*
ReactDOM.render(
    <Site products={PRODUCTS} />,
    document.getElementById('container')
);
*/

