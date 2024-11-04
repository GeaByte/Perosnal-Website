<template>
    <div>
        <div className="about-me">
            <h1>About Me</h1>
            <b-card v-for="item in aboutMe" :key="item.title" :title="item.title" class="mb-3 shadow">
                <b-card-text class="p-3">
                    <p v-html="item.content"></p>
                </b-card-text>
            </b-card>
        </div>

    </div>
</template>
<script setup>
const aboutMe = [
    {
        title: "Introduction",
        content: `Hello! I'm <strong>Raymond</strong>, a passionate developer who enjoys creating engaging and functional
                software
                solutions across various platforms. Currently, I am a student at <strong>Douglas College</strong>,
                enrolled in a
                two-year Post-Baccalaureate Degree program in <strong>Computer and Information Systems</strong>, with an
                expected
                graduation date of <i>May 2026</i>. This program has not only deepened my technical knowledge but also
                strengthened my <strong>problem-solving skills</strong> and <strong>critical thinking</strong>
                abilities.`,

    }, {
        title: "Learning and Growth",
        content: `I take pride in my ability to learn quickly in fast-paced environments, which has allowed me to
                achieve outstanding academic results. My commitment to continuous improvement drives me to explore
                subjects I’m passionate about, often leading to personal side projects that enhance my skills in
                diverse areas of software development. I also admire the opportunity to read others' code, especially
                when they provide simpler solutions to complex problems. This practice broadens my understanding and
                inspires me to refine my own coding techniques.`
    }, {
        title: "Programming Approach",
        content: `As a <strong>detail-oriented programmer</strong>, I often produce fewer bugs than my peers, which I
                attribute to my
                meticulous approach to coding. I believe that paying close attention to the finer points of programming
                can lead to cleaner, more efficient code. Additionally, I am <strong>methodical</strong> in my
                problem-solving approach.
                When I encounter a bug, I can quickly locate its root cause and implement an effective fix, allowing me
                to learn and grow from each challenge.`
    }, {
        title: "Future Aspirations",
        content: `I am excited about the opportunity to apply my skills in a <strong>Co-op Software Development
                    Engineer</strong> position,
                where I can contribute to real-world projects while gaining valuable industry experience.
                I look forward to collaborating with others and continuing my journey in the tech field.`
    }]
console.log(aboutMe)
</script>

<style scoped>
.about-me {
    text-align: justify;
    width: 80%;
    margin: auto;
}
</style>