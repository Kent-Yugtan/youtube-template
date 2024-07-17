<template>
    <div class="video-container">
        <v-row>
            <v-col
                v-for="(thumbNail, index) in filteredThumbNails"
                :key="index"
                cols="12"
                md="6"
                lg="4"
            >
                <v-card>
                    <iframe
                        :src="getVideoSrc(thumbNail)"
                        frameborder="0"
                        width="100%"
                        height="230px"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        @mouseenter="startVideo(thumbNail)"
                        @mouseleave="stopVideo(thumbNail)"
                    ></iframe>
                    <v-card-title class="text-truncate">{{ truncatedTitle(thumbNail?.title) }}</v-card-title>
                    <v-card-subtitle class="text-justify content-height">{{ truncatedContent(thumbNail?.content) }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn
                            icon
                            @click.stop="playVideo(thumbNail?.video)"
                        >
                            <v-icon>mdi-play-circle</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="videoDialog" >
            <v-card>
                <v-responsive aspect-ratio="16/9">
                    <div v-html="currentVideo"></div>
                </v-responsive>
            </v-card>
        </v-dialog>
    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
@Component<VideoContainer>({
    name:'VideoContainer',
})

export default class VideoContainer extends Vue {
    @Prop({default: () => {
        return [];
    }}) data:any

    videoDialog = false;
    currentVideo: string | null = null;
    activeVideo: any = null;

    get filteredThumbNails() {
        return this.data.filter((thumbNail: any) => thumbNail?.url);
    }
  
    truncatedTitle(title: string) {
        return title.length > 35 ? `${title.slice(0, 35)}...` : title;
    }

    truncatedContent(content: string) {
        return content.length > 230 ? `${content.slice(0, 230)}...` : content;
    }

    startVideo(thumbNail: any) {
        this.activeVideo = thumbNail;
    }

    stopVideo(thumbNail: any) {
        if (this.activeVideo === thumbNail) {
            this.activeVideo = null;
        }
    }

    getVideoSrc(thumbNail: any) {
        return this.isPlaying(thumbNail) ? `${thumbNail?.url}?autoplay=1` : thumbNail?.url;
    }

    isPlaying(thumbNail: any) {
        return this.activeVideo === thumbNail;
    }

    playVideo(video: string) {
        this.currentVideo = video; 
        this.videoDialog = true;  
    }

}
</script>

<style lang='scss' scoped>
.video-container{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .v-card {
        max-width: 100%;
        cursor: pointer;
        height: 450px;
    }

    .v-dialog {
        width: 100%;
    }

    .v-responsive {
        padding-top: 56.25%;
    }

    .content-height{
        height: 112px;
    }

    .text-truncate {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;

        @media screen and (max-width: 576px) {
            max-width: 134px;
        }
    }

}

</style>