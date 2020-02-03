<template>
    <span id="quote-text">
        {{ message }}
    </span>
</template>

<script>
export default {
    data: {
        quotes:["働くない病になっちゃった . . .",
        "働くない . . .",
        "睡眠中、いい夢かな . . ."],
        message:""
    },
    created() {
        var e=Math.floor(Math.random()*this.quotes.length);
        this.message=this.quotes[e]
    }
}
</script>