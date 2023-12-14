import editBtn from '../../../assets/img/edit-buttons.png'
function EditBtn() {
  return (
    <button className='flex justify-end -mr-2 cursor-pointer'>
      <img src={editBtn} />
    </button>
  )
}

export default EditBtn