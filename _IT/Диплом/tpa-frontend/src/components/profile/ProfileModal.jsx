import './Profile.css';

const ProfileModal=({active,setActive,children})=>{

    return(
        <div className={active ? 'profileModal active' : 'profileModal'} onClick={()=>setActive(false)}>
            <div className='profileModalContent' onClick={e=>e.stopPropagation()}>
                {children}
                <div className='modalButtons'>
                    <button className='cancelButton' onClick={()=>setActive(false)}>Отменить</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal;