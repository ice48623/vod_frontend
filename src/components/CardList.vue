<template>
    <v-container fluid grid-list-xl>
        <v-layout xs12 wrap row>
            <v-flex v-for="item in items" xs4>
                <v-card>
                    <v-img
                        :src="item.img"
                        aspect-ratio="1.5"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="white--text"><v-flex tag="h2" class="headline">{{item.name}}</v-flex></span>
                            </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-tile primary-title>
                        <v-flex class="text-truncate"> {{item.description}} </v-flex>
                    </v-card-tile>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style>

</style>

<script>
export default {
    name: 'CardList',
    data() {
        return{
            items: [
                {name: "dude", description: "test1", img: 'https://media.giphy.com/media/20k1punZ5bpmM/giphy.gif'},
                {name: "what", description: "test2", img: 'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif'},
                {name: "the", description: "some vid description", img: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'},
                {name: "****", description: "some vid description", img: 'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif'},
                {name: "haha", description: "some vid description", img: 'https://media.giphy.com/media/q14gjSqpoREBO/giphy.gif'},
            ]
        }
    }
}
</script>
