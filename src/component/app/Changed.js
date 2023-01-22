export default function Changed({user}){
    console.log(user);
    if(!user) return null;
    return (
        <div id="changed-user">
            <img src={user.avatar}/>
            <h4>{user.name}</h4>
            {
                Object.keys(user.details).map(key => 
                    <div key={key} className="property-user">
                        {`${key}: ${user.details[key]}`}
                    </div>)
            }
        </div>
    )
}