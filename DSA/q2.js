

// Valid Anagram #242https://leetcode.com/problems/valid-anagram/


SOLUTION:- function isAnagram(s,t){
    if(s.length!=t.length)return false
        s.split("").sort((a,b)=>a-b)
        t.split("").sort((a,b)=>a-b)
         let obj={}
         let obj2={}
        for(let i=0;i<s.length;i++){
            if(obj[s[i]]==undefined){
                obj[s[i]]=1
                  
            }else{
                obj[s[i]]++
               
            }
               if(obj2[t[i]]==undefined){
               
                   obj2[t[i]]=1
            }else{
                
                obj2[t[i]]++
            }
        }
         console.log(obj,obj2)
        for(let a in obj){
            if(obj[a]!=obj2[a]){
                return false
            }
        }
       
        return true
}