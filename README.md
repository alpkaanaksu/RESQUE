# RESQUE: The Research Quality Evaluation scheme for psychological research

The **Research Quality Evaluation (RESQUE)** framework provides recommendations for a responsible research assessment that does not rely on flawed metrics such as the journal impact factor or the h-index. It provides objective quality and impact indicators for three types of research outputs:
(a) publications of empirical studies, (b) published data sets and (c) research software. It is primarily developed for the field of psychology, but might be easily transferred to neighbouring empirical scientific fields.

In the spirit of [CoARA](https://coara.eu), it recognises diverse academic outputs, emphasizes quality over quantity, and combines qualitative peer review by responsible use of quantitative indicators. Its main intended use is to aid decisions in hiring and tenure committees.

This repository is used for continuous development, versioning, and issue tracking.
Stable releases are tagged here and are mirrored to a [project on OSF](https://osf.io/4wynr/wiki/home/).
(The OSF project is intended to be a landing page for end-users not acquainted with Github).

Join our [free mailing list](https://www.listserv.dfn.de/sympa/info/psy-dora) to receive news and updates about the RESQUE framework and rating sheets!  

**Table of content:**

- [RESQUE: The Research Quality Evaluation scheme for psychological research](#resque-the-research-quality-evaluation-scheme-for-psychological-research)
  - [Publications, presentations, and commentaries by the scientific community](#publications-presentations-and-commentaries-by-the-scientific-community)
    - [Publications](#publications)
    - [Commentaries](#commentaries)
    - [Presentations](#presentations)
  - [Resources](#resources)
    - [☑️ Rating sheets (core set)](#️-rating-sheets-core-set)
    - [☑︎ Rating sheets (expansion packs)](#︎-rating-sheets-expansion-packs)
    - [📔 Coding manual](#-coding-manual)
    - [🧑‍💻 Analysis scripts for R](#-analysis-scripts-for-r)
  - [How to get started](#how-to-get-started)
    - [...as hiring committees](#as-hiring-committees)
    - [...as tenure track committees](#as-tenure-track-committees)
    - [... as applicants](#-as-applicants)
  - [🚀 How to contribute](#-how-to-contribute)

## Publications, presentations, and commentaries by the scientific community

### Publications

The *general framework* of RESQUE is described in:

> [1] ![](images/OA_icon.png) Schönbrodt, F. D., Gärtner, A., Frank, M., Gollwitzer, M., Ihle, M., Mischkowski, D., … Leising, D. (2022, November 25). Responsible Research Assessment I: Implementing DORA for hiring and promotion in psychology. [https://doi.org/10.31234/osf.io/rgh5b](https://doi.org/10.31234/osf.io/rgh5b)

![](images/RESQUE_framework.png)

The *specific RESQUE rating schemes* are described in:

> [2] ![](images/OA_icon.png) Gärtner, A., Leising, D., & Schönbrodt, F. D. (2022, November 25). Responsible Research Assessment II: A specific proposal for hiring and promotion in psychology. [https://doi.org/10.31234/osf.io/5yexm](https://doi.org/10.31234/osf.io/5yexm)

and

> [3] ![](images/OA_icon.png) Gärtner, A., Leising, D., & Schönbrodt, F. D. (2023). Empfehlungen zur Bewertung wissenschaftlicher Leistungen bei Berufungsverfahren in der Psychologie. Psychologische Rundschau, 74(3), 166–174. [https://doi.org/10.1026/0033-3042/a000630](https://doi.org/10.1026/0033-3042/a000630)

(Note: these publications refer to version 0.1 of the RESQUE scheme; as the rating scheme will be continuously updated based on community feedback and ongoing evaluation studies, some divergences to these publications will arise).

### Commentaries

You can find 15 comments to our taget paper [1] published in Meta-Psychology:

TODO

Furthermore, there are 6 additional commentaries (in German) published in the [Psychologische Rundschau](https://econtent.hogrefe.com/toc/pru/74/3):

- Lange, J., Degner, J., Gleibs, I. H., & Jonas, E. (2023). Fachgruppe Sozialpsychologie: Faires und valides Shortlisting in Phase 1. Psychologische Rundschau, 74(3), 187–190. [https://doi.org/10.1026/0033-3042/a000641](https://doi.org/10.1026/0033-3042/a000641)
- Niessen, C., Melchers, K. G., Ohly, S., Fay, D., Handke, L., & Kern, U. M. (2023). Fachgruppe Arbeits-, Organisations- und Witschaftspsychologie: Ein Plädoyer für breit gewählte und anforderungsbezogene Leistungsindikatoren. Psychologische Rundschau, 74(3), 180–182. [https://doi.org/10.1026/0033-3042/a000637](https://doi.org/10.1026/0033-3042/a000637)
- Ortner, T., Kretzschmar, A., Rauthmann, J. F., & Tibubos, A. N. (2023). Fachgruppe Differentielle Psychologie, Persönlichkeitspsychologie und psychologische Diagnostik: Berufungsverfahren unter einer diagnostischen Perspektive fundiert durchführen. Psychologische Rundschau, 74(3), 182–184. [https://doi.org/10.1026/0033-3042/a000638](https://doi.org/10.1026/0033-3042/a000638)
- Schwartz, B., Szota, K., Schmitz, J., Lueken, U., & Lincoln, T. (2023). Fachgruppe Klinische Psychologie und Psychotherapie: Mehr Differenzierung nach Fachgebieten. Psychologische Rundschau, 74(3), 184–185. [https://doi.org/10.1026/0033-3042/a000639](https://doi.org/10.1026/0033-3042/a000639)
- Sparfeldt, J. R., Spörer, N., Greiff, S., & Schneider, R. (2023). Fachgruppe Pädagogische Psychologie: Ein Plädoyer für valide‍(re) Bewertungen der wissenschaftlichen Leistungen in Berufungsverfahren. Psychologische Rundschau, 74(3), 185–187. [https://doi.org/10.1026/0033-3042/a000640](https://doi.org/10.1026/0033-3042/a000640)
- Stroebe, W., & Strack, F. (2023). Kommentare zu Gärtner, A. et al. (2023). Empfehlungen zur Bewertung wissenschaftlicher Leistungen bei Berufungsverfahren in der Psychologie: Zweierlei Maß? Warum manche Psychologen den Gebrauch von quantitativen Indikatoren der Forschungsqualität ablehnen. Psychologische Rundschau, 74(3), 175–179. [https://doi.org/10.1026/0033-3042/a000631](https://doi.org/10.1026/0033-3042/a000631)


### Presentations

To get an overview about the RESQUE project, you can look at our presentation slides:

- Schönbrodt (2023-03): [Responsible Research Assessment: A practical recommendation for the evaluation of research quality beyond h-index and journal impact factors](./presentations/Schoenbrodt-2023-03-Responsible_Research_Assessment.pdf)
- Gärtner (2023-09): [Responsible Research Assessment II: The RESQUE web form for hiring and promotion](./presentations/Gaertner-2023-09-Responsible_Research_Assessment_II.pdf)


## Resources

### ☑️ Rating sheets (core set)
Versioned releases of the rating sheets have so far been provided as offline Excel files in the folder [/rating_sheets](/rating_sheets). 
**These are now deprecated and only kept as an archive!**

With the goal to make data entry for applicants and hiring committees as easy and frictionless as possible, we now develop a [web form](https://nicebread.github.io/RESQUE/web/) that allows to enter and store the data in a JSON format.

We provide three rating schemes for ...

- Publications, preprints, book chapters, etc. (**RESQUE-Pubs**): [Development version 0.3, web form](https://nicebread.github.io/RESQUE/web/)
- Data sets (**RESQUE-Data**): [Current release (v0.1)](/rating_sheets/RESQUE_data-sets_v0_1.xlsx)
- Research software (**RESQUE-Software**): [Current release (v0.1)](/rating_sheets/RESQUE_software_v0_1.xlsx) - [Development version 0.2, xlsx](https://docs.google.com/spreadsheets/d/1jGWPokhqCk2IjT--0E1CvKnVBkOArM-O/edit?usp=sharing&ouid=108982640291853577145&rtpof=true&sd=true)

The web form currently only implemented *RESQUE-Pubs*.

The rating sheets are versioned. Indicators from the core set start with the prefix "P" (Publications), "D" (Data) or "S" (Software).

### ☑︎ Rating sheets (expansion packs)

One purpose of this central landing page is to collect disciplinary **expansion packs (EPs)** with specific indicators that are relevant for a subfield. 
If you plan to provide an expansion pack, please [get in contact](#🚀-how-to-contribute) with us (we will help to implement that in the web form).

Such EPs ideally are contributed from a legit academic community and stem from a consensus process. Before including EPs in this project, we do a minimal review for suitability.

*Currently, there are no expansion packs available.*

### 📔 Coding manual
The coding manual is a companion to the rating schemes and gives guidance on how to apply the ratings. It includes examples and a discussion of boundary cases.
The goal of the coding manual is to increase interrater reliability, in particular when external raters apply the scheme to research outputs (in contrast to applicants rating their own research).

Active development of the manual takes place in a [Google doc (v 0.2)](https://docs.google.com/document/d/1yrBbxwf-kQZvaCnVos06w2_GahK2lyXyP5eHlZXlcw4/edit?usp=sharing); tagged releases are stored in the folder [/coding_manual](./coding_manual).

### 🧑‍💻 Analysis scripts for R
We provide R scripts that ...

1. load and aggregate multiple xlsx files with rating data
2. enrich the data with other sources of information (e.g. citation counts & normalized citation counts from [OpenAlex](https://openalex.org))
3. provide candidate profiles for tenure committees

Make sure that the version of the R scripts match the version of the rating sheets - otherwise they will probably not work.


## How to get started

### ...as hiring committees

TODO

- Explicate the "menu approach" - see the [Form Builder](https://nicebread.github.io/RESQUE/web/builder)
- Show recommended paragraph in job ad
- cf. Lange et al.: Commit to weights and indicator sets when publishing the job ad; we recommend to publish the weights and indicators along with the ad.
- Instructions for applicants


### ...as tenure track committees

TODO

### ... as applicants

TODO

- How to use the xlsx sheets
- 


## 🚀 How to contribute

For minor updates and minor feature requests, please use the [issue tracker](https://github.com/nicebread/RESQUE/issues).

If you want to collaborate scientifically on the project, please contact one of the project maintainers ([Felix Schönbrodt](mailto:felix.schoenbrodt@psy.lmu.de); [Anne Gärtner](mailto:anne_gaertner@tu-dresden.de); [Daniel Leising](mailto:Daniel.Leising@tu-dresden.de)).

Please note and respect our [Code of Conduct](/CODE_OF_CONDUCT.md).

This project is a community effort with many contributors, including:

- Alp Kaan Aksu (for designing and programming the web form [aut])
- Maximilian Ernst (software indicators [aut, ctb])
- Aaron Peikert (software indicators [aut, ctb])
- Daniel Nüst (code verification indicator [ctb])
- TODO add all others

... all who wrote [comments](#commentaries) with many constructive suggestions
... and many more who gave extended feedback on the proposal! 🙏
