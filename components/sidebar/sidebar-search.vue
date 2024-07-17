<template>
    <div class="sidebar-container d-none d-md-block">
        <div class="d-flex gap-1">
            <div class="w-100" v-for="(type, index) in types" :key="index">
                <div 
                    class="p-2 div-button d-grid justify-content-center"
                    :class="{ active: isActive(type) }"
                    @click="setActive(type)"
                >
                    <i class="text-center mb-2" :class="type.icon"></i>
                    <span>
                        {{ type.name }}
                    </span>
                </div>
            </div>
        </div>

        <v-list v-if="activeType">
            <v-list-group
                v-if="item.subMenu && item.subMenu.length > 0"
                v-for="(item,idx) in activeType.menu"
                :key="idx"
                v-model="item.active"
                no-action
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.menuName"></v-list-item-title>
                    </v-list-item-content>
                </template>

                    <v-list-item
                        v-for="(subItem,subIdx) in item.subMenu"
                        :key="subIdx"
                        class="cursor-pointer"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="subItem.subMenuName" @click.prevent="getSubMenuTitle(subItem.subMenuName, false)"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
            </v-list-group>

            <v-list-item v-else class="cursor-pointer" >
                <v-list-item-content>
                    <v-list-item-title v-text="item.menuName" @click.prevent="getSubMenuTitle(item.menuName, false)"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
@Component<sidebarSearch>({
name:'sidebarSearch',

})

export default class sidebarSearch extends Vue {
    @Prop({default: () => {
        return [];
    }}) data:any

    activeType: any = null;

    get value(){
        return this.data;
    }

    set value(value){
        this.$emit('input', value)
    }

    get types(){
        return this.value
    }

    isActive(type: any) {
        return this.activeType === type;
    }

    setActive(type: any) {
        this.activeType = type; 
    }

    getSubMenuTitle(title:any){
        this.$emit('getTitle', title, false)
    }

    created(){
        if (this.types.length > 0) {
            this.setActive(this.types[0]);
            this.$emit('getTitle', 'All Menus', true)
        }
    }
}
</script>

<style lang='scss' scoped>
.sidebar-container{
    display: none;

    @media (min-width: 768px) {
        .sidebar-container {
            display: block;
        }
    }

    .div-button {
        width: 100%;
        height: 100%;
        background-color: #e7e7e7;
        border-radius: 5px;

        span {
            font-size: 12px;
            font-weight: 400;
            color: dimgray;
        }

        &:hover {
            background-color: #a9cff7;
        }

        &.active {
            background-color: #a9cff7; 
            color: #2c8ff9; 
        }
    }

    .cursor-pointer {
        cursor: pointer;
    }
}

</style>