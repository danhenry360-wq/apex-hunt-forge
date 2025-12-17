import { motion } from "framer-motion";

export const AsciiShark = () => {
  const sharkArt = `
                                     _
                 __                 / \\\\
                /  \\\\               |   |
               |    |              |   |
             __|    |______________|   |
            /                          |
           |                           |
           |      VIBE CODING          |
           |       PREDATOR            |
           |                           |
           |___________________________|
                |    |
                |    |
                \\\\____/
      `;

  // A more detailed ascii shark
  const complexShark = `
              ,                                   
             /|                                   
            / |                                   
           /  |                                   
          /___|                                   
         |    |                                   
         |    |_____________________________      
         |                                  \\\\     
         |      VIBE CODING PREDATOR         \\\\    
         |                                    \\\\   
         |_____________________________________\\\\  
             |    |                    |    |     
             |    |                    |    |     
             \\\\____/                    \\\\____/     
  `;

  const realShark = `
         .
        / \\\\
       /   \\\\                                            .
      /     \\\\                                          / \\\\
     /       \\\\                                        |   |
    /         \\\\                                       |   |
   /           \\\\                                      |   |
  /             \\\\                                  ___|   |___
 |               \\\\                                /           \\\\
 |                \\\\                              |             |
 |                 \\\\                             |  <O>   <O>  |
 |                  \\\\                            |             |
  \\\\                  \\\\___________________________|             |
   \\\\                                                          /
    \\\\                                                        /
     \\\\______________________________________________________/
  `;

  const cyberShark = `
      /""-._                                   
     .      '-,                                 
     :         '',                              
     ;      *     '.                            
     ' *         () '.                          
      \\\\               \\\\                         
       \\\\      _.---.._ '.                       
        :  .' _.--''-''  \\\\ ,'                   
  .._   |.' .'             l                    
   \\\\ '._'      "VIBE"       l                   
    \\\\                      /                    
     '-._                 /                     
         '--.            /                      
             \\\\          /                       
              |        |                        
              |        |                        
              |        |                        
  `;

  return (
    <div className="font-mono text-[10px] sm:text-xs md:text-sm leading-none whitespace-pre text-primary opacity-80 select-none">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {cyberShark}
      </motion.div>
    </div>
  );
};
