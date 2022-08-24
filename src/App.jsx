import {Post} from '../src/components/Post';
import {Header}from './components/Header';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css'

export function App() {
  return (
  <div>
    <Header/>
    <div className={styles.wrapper} >
     <Sidebar/>
 <main>
        <Post 
              author="Diego Brasileir" 
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor sapien et diam accumsan, placerat elementum ligula aliquam." />
        <Post
              author="Diego Brasileiro"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor sapien et diam accumsan, placerat elementum ligula aliquam." />
    </main>
  </div>
  </div>
  )
}


