
// Conversation labels to be filtered
var filterLabels = [
    'label',
    'label-subLabel'
];

// TTL to be filtered - older than in days
var filterAfterDays = 15;

// Initialize the Script
function initialize() {
    return;
}

// Installs the Script
function install() {
    ScriptApp.newTrigger("autoPurge")
             .timeBased()
             .at(new Date((new Date()).getTime() + 1000*60*2))
             .create();

    ScriptApp.newTrigger("autoPurge")
             .timeBased().everyDays(1).create();
}

// Uninstalls the Script
function uninstall() {
    var triggers = ScriptApp.getProjectTriggers();
    for (var i=0; i<triggers.length; i++) {
        ScriptApp.deleteTrigger(triggers[i]);
    }
}

// Check for e-mails with filters and delete them
function autoPurge() {
    // setting up the purge starting date
    var age = new Date();
    age.setDate(age.getDate() - filterAfterDays);
    var purge = Utilities.formatDate(age, Session.getScriptTimeZone(), "yyyy-MM-dd");

    // iterate over the labels to filter the conversations
    filterLabels.forEach(function (label, index) {
        var searchQuery = "label:" + label + " before:" + purge;
        try {
            var threads = GmailApp.search(searchQuery, 0, 100);

            if (threads.length == 100) {
                ScriptApp.newTrigger("autoPurge")
                         .timeBased()
                         .at(new Date((new Date()).getTime() + 1000*60*10))
                         .create();
            }
          
            for (var i=0; i<threads.length; i++) {
                var messages = GmailApp.getMessagesForThread(threads[i]);
                for (var j=0; j<messages.length; j++) {
                    var email = messages[j];
                    if (email.getDate() < age) {
                        email.moveToTrash();
                    }
                }
            }
        } catch (e) {}
    });
}
