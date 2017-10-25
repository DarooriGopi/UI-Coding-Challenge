import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
// import { pick } from 'ramda';
import Modal from 'react-redux-modal-flex';
import ProductRow from './ProductRow';
// import { actions as ModalActions } from '../package/modules';
// import NameModal from './NameModal';

const products = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
];

const ProductTable = ({ filter }) => {
    let rows = [];

    products.forEach(p => {
        const nameLC = p.name.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (nameLC.indexOf(filterLC) !== -1) {
            rows.push(
                <ProductRow key={p.name} data={p} />
            );
        }
    });
    return  ( <div className="row">
				<div className="hidden" >{rows}</div>
				<div className="row form-row row-fluid" >
					<div className="col col-md-2" >
						<p><b>Name</b></p>
						<p>Johny Smith</p>
					</div>
					<div className="col col-md-3" >
						<button className="btn btn-primary"  >Edit Name</button>
					</div>
					<div className="clearfix"></div>
				<hr/>
				</div>
				<div className="row form-row" >
					<div className="col col-md-2" >
						<p><b>Address</b></p>
						<p>123 Bowl Lane</p>
						<p>New york NY</p>
					</div>
					<div className="col col-md-3" >
						<button className="btn btn-primary" >Edit Address</button>
					</div>
					<div className="clearfix"></div>
				<hr/>
				</div>
				<div className="row form-row" >
					<div className="col col-md-2" >
						<p><b>Favourite Teams</b></p>
						<p>None Added</p>
					</div>
					<div className="col col-md-3" >
						<button className="btn btn-primary" >Add Teams</button>
					</div>
					<div className="clearfix"></div>
				<hr/>
				</div>
				<Modal/>
			</div>);
};

ProductTable.propTypes = {
    filter: PropTypes.string
};

export default ProductTable;
