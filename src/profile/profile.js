const Profile = ({fullName,bio,profession}) => {
    return ( 
        <div>
            <div class="card">
                <div class="card-body">
                   fullname: {fullName}
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                   bio: {bio}
                </div>
                <div class="card-body">
                   profession: {profession}

                </div>
                
            </div>
        </div>
     );
}
 
export default Profile;