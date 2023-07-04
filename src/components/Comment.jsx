import { useState } from 'react';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

// eslint-disable-next-line react/prop-types
export function Comment({ content, onDeleteComment }) {
// eslint-disable-next-line no-undef
const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment(comment) {
    onDeleteComment(content)
}

function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1
    });
  }

return (
    <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://github.com/LuizWolfgang.png" alt="" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Luiz Andre</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atras</time>
                    </div>
                    <button title="Deletar comentario" onClick={handleDeleteComment}>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
            <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
    );
}