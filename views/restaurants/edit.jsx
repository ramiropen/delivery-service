const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
            <main>
            <h1>Edit Restaurant</h1>
            <form method="POST" action={`/restaurants/${data.restaurant.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="name">Restaurant Name</label>
                            <input className="form-control" id="name" name="name" value={data.restaurant.name} required/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="pic">Address</label>
                            <input className="form-control " id="pic" name="pic" value={data.restaurant.address}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" value={data.restaurant.city}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" value={data.restaurant.state}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="state">Zip</label>
                            <input className="form-control" id="zip" name="zip" value={data.restaurant.zip}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" value={data.restaurant.cuisines} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Picture</label>
                        <input className="form-control" id="picture" name="picture" value={data.restaurant.picture} required/>
                    </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Edit Restaurant" />
                    </form>
            </main>
        </Def>
    );
}

module.exports = edit_form;