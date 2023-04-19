<template>

<div>
        <div class="parking-photos">
            <div v-for="photo in photos"
                 :key="photo.id"
                 class="photo"
                 @click="selectPhoto(photo.id)">
                <img :src="photo.src" alt="Parking Photo">
                <div class="caption">{{ photo.caption }}</div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return{
        photos: [
            { id: 1, src: 'src/assets/image1.png', caption: '5 Mins'},
            { id: 2, src: 'src/assets/parking_2 1.png', caption: '7 Mins'},
            { id: 3, src: 'src/assets/parking_3 1.png', caption: '10 Mins'},
            { id: 4, src: 'src/assets/parking_2 3.png', caption: '12 Mins'},
            { id: 5, src: 'src/assets/parking-8 1.png', caption: '12 Mins'},
            { id: 6, src: 'src/assets/parking-8 2.png', caption: '13 Mins' }
        ],
        selectedPhotoId: null
        }
    },
    methods: {
        selectPhoto(photoId) {
            this.selectedPhotoId = photoId;
        }
    }
}
</script>
<style scoped>
        .parking-photos {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            height: 76vh;
        }

        .photo {
            margin: 10px;
            cursor: pointer;
            flex-basis: calc(33.33% - 20px);
            max-width: calc(33.33% - 20px);
            text-align: center;
        }



        .caption {
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;
            color: #fff;
            font-size: 14px;
        }
        img:hover,
        img:active,
        button:hover,
        button:active {
        background-color: #284837;
        border-color: #284837;
        }
</style>