const React = require('react')
const Def = require('../default')

function new_form(data) {
    let message = ''
        if (data.message){
            message = (
                <h4 className='alert-danger'>{data.message}</h4>
            )
        }
    return (
        <Def>
            <main>
                <h1>Add New Restaurant</h1>
                {message}
                <form method="POST" action="/restaurants">
                    <div className="form-group">
                        <label htmlFor="name">Restaurant Name</label>
                        <input className="form-control" id="name" name="name" required/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label for="founded">Address</label>
                        <input className="form-control" id="address" name="address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip">Cuisines</label>
                        <input className="form-control" id="zip" name="zip" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisine">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic"/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                    </form>
            </main>
        </Def>
    );
}

module.exports = new_form