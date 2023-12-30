function skillsMember() {
    var member = {
        name: "John Doe",
        age: 34,
        skills: ["JavaScript", "HTML", "CSS"],
        addSkills: function(skill) {
            this.skills.push(skill);
        },
        removeSkills: function(skill) {
            this.skills = this.skills.filter(function(item) {
                return item !== skill;
            });
        }
    };
    return member;
}