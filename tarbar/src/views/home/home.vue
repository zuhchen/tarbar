<template>
    <div>
        <nar-bar>
            <template v-slot:center>
                <div>
                    购物车
                </div>
            </template>
        </nar-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'

export default {
    name:'Home',
    components: {
        NavBar
    }
}
</script>