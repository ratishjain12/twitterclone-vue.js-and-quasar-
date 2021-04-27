<template>
  <q-page>
    <div class="row">
      <div class="col ">
        <q-input class="q-my-md q-mx-sm input-text" autogrow bottom-slots v-model="newTweet" placeholder="What's Happening" counter maxlength="280" :dense="dense" >
        <template v-slot:before>
          <q-avatar size="xl" >
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>
        
      </q-input>
      </div>
       <div class="col col-shrink self-end q-pb-lg">
         <template>
          <q-btn 
          @click="addNewTweet" 
          :disable="!newTweet"
          class="q-ma-sm" 
          no-caps 
          unelevated 
          rounded 
          color="primary" 
          label="tweet" />

        </template> 
       </div>
      
      </div>
      <q-separator size="10px" color="grey-3"/>
        <div class="q-pa-md q-gutter-md">
          <q-scroll-area class="absolute full-width full-height">
        <q-list separator >


      <q-item  
      v-for="tweet in tweets"
      :key="tweet.id"
      class="q-pa-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label> <strong>Ratish Jain </strong> <span class="subtitle-1">@ratishjain</span></q-item-label>
          <q-item-label caption class="content">
            <span class="text-weight-bold text-subtitle2">
              {{tweet.content}}
            </span>
            
          </q-item-label>
          <div class="row q-mt-sm justify-between">
          <q-btn   flat color="dark" icon="chat_bubble" size="sm"/>
          <q-btn   flat color="dark" icon="fas fa-retweet" size="sm" />
          <q-btn   flat color="dark" icon="favorite_border" size="sm"/>
          <q-btn   @click="deleteTweet(tweet)" flat color="dark" icon="delete" size="sm"/>
        
          </div>
        </q-item-section>

        <q-item-section side top>
          {{tweet.date | relativeDate}}
          
        </q-item-section>
        
        
      </q-item>
      
    </q-list>
          </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
import { formatDistance} from 'date-fns'
import db from 'src/boot/firebase';
export default {
  name: 'PageHome',
  
  data() {
    return {
      newTweet:'',
      tweets:[]
      }
  },
  filters:{
    relativeDate(value){
      return formatDistance(value, new Date())
    }
  },
  methods:{
    addNewTweet(){
      let newTweetContent = {
        content: this.newTweet,
        date: Date.now()
      }

      db.collection("tweets").add(newTweetContent)
      .then(() => {
            console.log("Document successfully written!");
          })
      .catch((error) => {
            console.error("Error writing document: ", error);
      });
      this.newTweet = ''
    },

    deleteTweet(tweet){
      console.log(tweet.id)
      db.collection("tweets").doc(tweet.id).delete().then(() => {
      console.log("Document successfully deleted!");
      }).catch((error) => {
      console.error("Error removing document: ", error);
      });
      
    }   
  },
  mounted(){
    db.collection("tweets").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          let newContent = change.doc.data();
          newContent.id = change.doc.id;
            if (change.type === "added") {
                console.log("Tweets :  ", newContent);
                this.tweets.unshift(newContent);
            }
            if (change.type === "modified") {
                console.log("Modified city: ", newContent);
            }
            if (change.type === "removed") {
                console.log("Removed tweet: ", newContent);
                let index = this.tweets.findIndex(tweet => tweet.id === newContent.id)
                this.tweets.splice(index,1)
            }
        });
    });
  }
}

</script>
<style lang="sass" scoped >
</style>
