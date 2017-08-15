# Google GMail Auto-Purge

This is a Google Script to auto-remove *tagged* and *older than a date* conversations (e-mails) from the GMail inbox.

This project was based in the original [labnol.org article](https://www.labnol.org/internet/gmail-auto-purge/27605/).

## Installation

1. Login to your Google Drive.
2. Create a new folder called `GScripts` and go into it.
3. Click in *NEW -> More -> Connect More Apps*, search for *Google Apps Script* and click in *+ Connect*.
4. Click in *NEW -> More -> Google Apps Script* and a new window will be opened.
5. Change the title of the project to a name that you can identify, like: *auto-purge*.
6. Copy and paste the script in [auto-purge.gs](auto-purge.gs) into the code editor and save it using *Ctrl+S*, *Cmd+S* or clicking in *File -> Save*.
7. Update the script with your own label filters and TTL (see below).
8. Click in *Run -> Install* and an **authorization** popup will be opened, then click in *Review Permissions*.
9. In the new window opened, select your *Google Account* and click in **Allow**.
10. Done

The script will run everyday around 12:00 AM, but if you want to test the script now, just click in *Run -> autoPurge*.

## Uninstall

To uninstall just go into the *Script Editor* opening it from your *Google Drive* then click in *Run -> Uninstall*.

## Getting the labels

To get the labels to configure your script, go into your GMail and click in the sidebar for the label that you want to use in the filter.

In the search bar a text like: **label:some-label** will appear, then, copy the content without the *label:* part.

## License

This project is licensed under the [MIT license](LICENSE).
