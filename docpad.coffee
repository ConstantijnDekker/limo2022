# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    # Get all html pages (with isPage), order them, and add with default template
    collections:
        pages: ->
            @getCollection("html").findAllLive({isPage:true}, {order: 1}).on "add", (model) ->
                model.setMetaDefaults({layout:"default"})

    # =================================
    # Template Configuration
    
    plugins:
        livereload:
            enabled: false

    # Template Data
    # Use to define your own template data and helpers that will be accessible to your templates
    # Complete listing of default values can be found here: http://docpad.org/docs/template-data
    templateData:

        # Switch that acts as a dictionary to link images to sponsor sites
        sponsors: (sponsor) ->
            switch sponsor
                when "ASML" then "https://www.asml.com/careers/"
                when "UUtrecht" then "http://www.uu.nl/"
                when "Transtrend" then "http://www.transtrend.com/nl/"
                when "FlowTraders" then "https://www.flowtraders.com/"
                when "Digital" then "http://www.thedigitalcapabilitycompany.com/"
                when "Optiver" then "http://www.optiver.com/"
                when "KdVI" then "http://kdvi.uva.nl/"
                when "FNWI" then "http://www.uva.nl/faculteit/faculteit-der-natuurwetenschappen-wiskunde-en-informatica/faculteit-der-natuurwetenschappen-wiskunde-en-informatica.html"
                when "EWI Twente" then "https://www.utwente.nl/nl/ewi/"
                when "MI Leiden" then "https://www.universiteitleiden.nl/wiskunde-en-natuurwetenschappen/wiskunde"
                
                
        committee_src: "img/commissie/"

        # Sort of a dictionary where the first item of the tuple is the key
        committee_list: [
            {abbr: 'Femke',    name: 'Femke Madsen',      func: 'Voorzitter'},
            {abbr: 'Lies',    name: 'Lies Beers',   func: 'Secretaris'},
            {abbr: 'Simon',   name: 'Simon Wittkamp',  func: 'Penningmeester'},
            {abbr: 'Duncan', name: 'Duncan Pelan', func: 'Commissaris Acquisitie'},
            {abbr: 'Wouter',  name: 'Wouter Rienks',   func: 'Wedstrijdcommissaris'},
            {abbr: 'Sebastian',    name: 'Sebastian Zur', func: 'Commissaris ICT'},
        ]

        # Specify some site properties
        site:
            # The production URL of our website
            url: "/static/limo2022"

            # The default title of our website
            title: "LIMO 2022"

            # The website description (for SEO)
            description: """
                De Landelijke Interuniversitaire Mathematische Olympiade is een wiskundewedstrijd tussen teams van verschillende universiteiten.
                """

            # The website keywords (for SEO) separated by commas
            keywords: """
                LIMO, wiskunde, universiteit, studenten
                """

        favicon: ->
            @site.url + "/img/LIMO_ico.ico"


        # -----------------------------
        # Helper Functions

        # Get the Absolute URL of a document
        getUrl: (document) ->
            return @site.url + (document.url or document.get?('url'))

        # Get the prepared site/document title
        # Often we would like to specify particular formatting to our page's title
        # we can apply that formatting here
        getPreparedTitle: ->
            # if we have a document title, then we should use that and suffix the site's title onto it
            if @document.title
                "#{@document.title} | #{@site.title}"
            # if our document does not have its own title, then we should just use the site's title
            else
                @site.title

        # Get the prepared site/document description
        getPreparedDescription: ->
            # if we have a document description, then we should use that, otherwise use the site's description
            @document.description or @site.description

        # Get the prepared site/document keywords
        getPreparedKeywords: ->
            # Merge the document keywords with the site keywords
            @site.keywords.concat(@document.keywords or []).join(', ')


    # =================================
    # Environments

    # For testing.
    environments:
        development:
            templateData:
                site:
                    #url: 'https://limo2022.nsaweb.nl'
                    url: 'http://localhost:9778'

    # =================================
    # Paths Configuration

    # Some standard options, not particularly interesting.

    # Ignore Paths
    # Can be set to an array of absolute paths that we should ignore from the scanning process
    #ignorePaths: false  # default

    # Ignore Hidden Files
    # Whether or not we should ignore files that start with a dot from the scanning process
    #ignoreHiddenFiles: false  # default

    # Ignore Common Patterns
    # Whether or not we should ignore commonly undesired files from the scanning process
    # (e.g., .DStore, thumbs.db, .git, files that start with a tilda, etc.)
    #ignoreCommonPatterns: true  # default

    # Ignore Custom Patterns
    # Can be set to a regex of custom patterns to ignore from the scanning process
    #ignoreCustomPatterns: false  # default
    #ignoreCustomPatterns: /.bak/

}

# Export the DocPad Configuration
module.exports = docpadConfig
