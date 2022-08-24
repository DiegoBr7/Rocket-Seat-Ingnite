import styles from './Post.module.css'

export function Post () {
    return(
      <article className={styles.post} >
          <header>
             <div className='styles.author' >
                <img  className={styles.avatar} src="https://avatars.githubusercontent.com/u/88857178?v=4" />
                <div className='authorInfo' >
                    <strong>Diego Brasileiro</strong>
                    <span>Web Developer</span>
                </div>
             </div>
            
             <time  title='24 de agosto de 2022 ás 10:27:47' dateTime='2022-08-24 10:27:47 '  >Publicado há 1h </time>
          </header>

          <div className={styles.content} >
              <p>Fala galeraa 👋</p>

              <p>acabei de subir mais um projeto no portifa. É um projeto que eu fiz no NLW Return.</p>

              <p>{''}<a href='' >👉#NLWproject</a>{''}
              <a href='' >#NLW </a>{''}
              <a href='' >#RocketSeat</a></p>
        
          </div>
      </article>
    )
}