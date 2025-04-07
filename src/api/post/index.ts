import { IPost } from "../../types";
import { collection , addDoc , query , orderBy , where , getDocs, } from "firebase/firestore";
import { db } from "../../firebase";

export const createPost = async ( post:Omit<IPost, 'id'> ) => {
    console.log (post);
    const postCollection = collection( db , 'posts' );
    const docRef = await addDoc( postCollection, post );
    return {...post, id: docRef.id}
} 


export const  getPosts = async (userid?:string): Promise<IPost[]> => {
    const postCollection = collection( db , 'posts' );
    let q = query (postCollection , orderBy('createdAt' , 'desc'));
    if (userid) 
        try {
            q = query (
                postCollection ,
                where('userId' , '==' , userid) ,
                orderBy('createdAt' , 'desc')
            );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map ((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as IPost[];

    }catch (error) {
console.error ('Error fetching posts:', error); 
}
const querySnapshot = await getDocs(q);
return querySnapshot.docs.map ((doc) => ({
    id: doc.id,
    ...doc.data(),
})) as IPost[];
}