# Imports
from __future__ import division
import sys, time, os.path, atom.data, gdata.client, gdata.docs.client, gdata.docs.data

# Settings
username = 'sviztsp@gmail.com'
password = 'vizvizviz'

# Set the filename and collection
filename = 'anderson_games.csv.xls'
filenames = ['player_games.xls','goalie_totals.xls','scoring_totals.xls']
collection = None

for name in filenames:
    # Open the file to be uploaded
    try:
        fh = open(name)
    except IOError, e:
        sys.exit('ERROR: Unable to open ' + name + ': ' + e[1])

    # Get file size and type
    file_size = os.path.getsize(fh.name)
    file_type = 'text/csv'

    # Create a Google Docs client
    docsclient = gdata.docs.client.DocsClient(source='Sports')

    # Log into Google Docs
    try:
        docsclient.ClientLogin(username, password, docsclient.source);
    except (gdata.client.BadAuthentication, gdata.client.Error), e:
        sys.exit('ERROR: ' + str(e))
    except:
        sys.exit('ERROR: Unable to login')

    #deletes the old file so the new updated one can be entered
    for doc in docsclient.GetAllResources():
        if doc.title.text == 'player_games.xls' and name == 'player_games.xls':
            docsclient.DeleteResource(doc, force=True)
            break
        if doc.title.text == 'goalie_totals.xls' and name == 'goalie_totals.xls':
            docsclient.DeleteResource(doc, force=True)
            break
        if doc.title.text == 'scoring_totals.xls' and name == 'scoring_totals.xls':
            docsclient.DeleteResource(doc, force=True)
            break

    # The default root collection URI
    uri = 'https://docs.google.com/feeds/upload/create-session/default/private/full'

    # Make sure Google tries to do all of the conversions on the upload (e.g. convert images to documents)
    uri += '?convert=true'

    # Create an uploader and upload the file
    # Hint: it should be possible to use UploadChunk() to allow display of upload statistics for large uploads
    t1 = time.time()
    uploader = gdata.client.ResumableUploader(docsclient, fh, file_type, file_size, chunk_size=1048576, desired_class=gdata.data.GDEntry)
    new_entry = uploader.UploadFile(uri, entry=gdata.data.GDEntry(title=atom.data.Title(text=os.path.basename(fh.name))))
    print 'Uploaded', '{0:.2f}'.format(file_size / 1024 / 1024) + ' MiB in ' + str(round(time.time() - t1, 2)) + ' seconds'