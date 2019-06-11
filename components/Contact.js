var Contact = React.createClass({
	propTypes: function() {
		item: React.PropTypes.object.isRequried;
	},
	render: function() {
		return (
			<li className={'contactItem'}>
				<img src={'http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Contact-icon.png'} className={'contactImage'} />
				<div className={'labelWrapper'}>
					<p className={'contactLabel'}>Imię: {this.props.item.firstName}</p>
					<p className={'contactLabel'}>Nazwisko: {this.props.item.lastName}</p>
					<a href={'mailto:' + this.props.item.email}>{this.props.item.email}</a>
				</div>
			</li>
		)
	}
});



