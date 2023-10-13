const UserProfileForm = () => {
return (
   <form>
      
      <label>
         User Name
         <input type='text'/>
      </label>
      <label>
         Phone
         <input type='tel'/>
      </label>
      <label>
         Birthday
         <input type='date'/>
      </label>
      <label>
         Skype
         <input type='text'/>
      </label>
      <label>
         Email
         <input type='email'/>
      </label>
      <button type="submit">Save Changes</button>
   </form>
)
}

export default UserProfileForm;