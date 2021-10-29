import React from 'react'

const NoteItem = ({ note, onClick }) => {
    return (
        <div onClick={onClick} className='note__item'>
            <p>{note.title}</p>
            <p>{note.text}</p>
        </div>
    )
}

export default NoteItem
