export default function Change({users, changeFunc}){
    return (
        <fieldset id="list-users">
        {
            users.map(user => 
                <div key={user.id}>
                    <input 
                    id={"user-"+user.id} 
                    className="radio-user" 
                    type="radio" 
                    name="list-users"/>

                    <label 
                    htmlFor={"user-"+user.id}
                    onClick={()=>{changeFunc(user.id)}}>{user.name}</label>
                </div>)
        }
        </fieldset>
    )
}