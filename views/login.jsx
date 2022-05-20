const React = require("react");
const Default = require("./layouts/Default");

function Login() {
  return (
    <Default>

      <h2>LOGIN TO VIEW RESTAURANTS</h2>
      <form action='' method='POST'>
        <label htmlFor='username'>Username:</label>
        <br />
        <input type='text' name='username' id='username' required defaultValue='Username' />
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <input type='text' name='password' id='password' defaultChecked='Password' />
        <br /><br />
        {/* Pressing submit logs in the user to the listing of restaraunts */}
        <input type='submit' />
      </form>
    </Default>
  );
}

module.exports = Login;
