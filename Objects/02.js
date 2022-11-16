function workers(obj){
    if(obj.dizziness == true){
        obj.levelOfHydrated = (obj.weight * 0.1) * obj.experience;
        obj.dizziness = false;
    }
    console.log(obj);
}
workers(
    { weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true }
      
)