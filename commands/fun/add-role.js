const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add-role-to-role')
        .setDescription('Add selected role to users specified.')
        .addRoleOption(option =>
            option.setName("role-to-add")
                .setDescription('This is what role you want to add to the user.')
        )
        .addRoleOption(option =>
            option.setName("target-role")
                .setDescription('This is the role to add to the target.')  
        ),
        
        async execute(interaction) {
            await interaction.reply('Getting log of actions');
            const targetRole = await interaction.options.getRole('target-role');
            const roleToAdd = await interaction.options.getRole('role-to-add');
            let allMembers = await interaction.guild.members.cache.size > 5 ? 
                                await interaction.guild.members.cache :
                                await interaction.guild.members.fetch();
            console.log(allMembers.size)
            console.log(roleToAdd.name, targetRole.name)
            

            try{
                
                await allMembers.forEach(async(member) => {
                    const hasTargetRole =  member._roles.includes(targetRole.id)
                    if(hasTargetRole){
                        console.log(member)
                        await member.roles.add(roleToAdd)
                        console.log(`Added ${roleToAdd.name} role to ${member.user.username}! `)
                    }
                })
                
            }
            catch(err){
                console.log(err)
            }
            finally{
               interaction.followUp("I'm done processing the roles!")
               
            }
        },
}
    