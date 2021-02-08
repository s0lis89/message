{let voice = {
    subject : ['I','You','He','We','They'],
    verb : ['learn', 'fly','dream','laugh','sing','cry'],
    adverb : ['at','about','from','with','on'],
    adjective : ['fast','beautiful','ugly','lovely','gross'],
    set_subject(){
        let index_subject = Math.floor(Math.random()*this.subject.length);
        return this.subject[index_subject];
    },
    set_verb(){
        let index_verb = Math.floor(Math.random()*this.verb.length);
        return this.verb[index_verb];
    },
    set_adverb(){
        let index_adverb = Math.floor(Math.random()*this.adverb.length);
        return this.adverb[index_adverb];
    },
    set_adjective(){
        let index_adjective = Math.floor(Math.random()*this.adjective.length);
        return this.adjective[index_adjective];
    },
    create_message(){
        let chose_subject = this.set_subject();
        let chose_verb = this.set_verb();
        let chose_adverb = this.set_adverb();
        let chose_adjective = this.set_adjective();
        return `${chose_subject} ${chose_verb} ${chose_adverb} ${chose_adjective}.`;
    }};

//console.log(voice.create_message());
console.log(voice.create_message());
}
