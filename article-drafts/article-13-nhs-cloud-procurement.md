---
title: How the NHS Buys Cloud
description: NHS cloud dependence is visible in DNS records and invisible in contract values, which is why the same service looks concentrated and competitive at once.
keywords: cloud procurement, nhs england, hyperscaler, data sovereignty
---

# How the NHS Buys Cloud

The English NHS does not buy cloud the way a company does. Most trusts inherit email from a central contract, add services through national frameworks, and discover what they depend on afterwards. Two analyses published in 2026 approach that from opposite directions: one maps the connections, the other maps the money. Neither finds evidence the position was chosen.

## What the DNS records actually measure

Computer Weekly analysed the public DNS footprint of the 213 NHS trusts and foundation trusts in the NHS England provider directory on 1 September 2026. For each it collected the published website domain, then queried public DNS: root records, a sweep of 220 common subdomains, and passive Certificate Transparency logs. The result was 12,829 individual records. Each address was mapped to its registered owner through RDAP, the registration-data protocol used by the regional internet registries, and classified as a hyperscaler, another cloud or hosting provider, or NHS-owned infrastructure.

The method has a ceiling, and the analysis states it. Of the 12,829 records, 6,937 are TXT records, the text notes used for email authentication and domain verification. Those carry text rather than a destination and cannot resolve to an owner, so they sit outside the infrastructure figures. A small number could not be queried because internet registries rate-limit automated lookups. The supplier figures are a lower bound.

A DNS record is evidence of a connection, and evidence of nothing else: not a contract, a value, or a spend. What the analysis can say is which outside companies a trust's systems depend on. What it cannot say is what the trust pays.

## The Microsoft default

Of the 213 trusts, 165 (77 per cent) have at least one connection to Amazon Web Services, Google Cloud or Microsoft. Measured by routable infrastructure, Microsoft accounts for 1,889 records against 229 for Amazon and 24 for Google.

The concentration is sharpest in email, and the reason is structural. Most of the NHS uses a centrally contracted email service run by Microsoft, formerly NHSmail and rebranded NHS.net Connect after migration in 2021. As a result 132 trusts (62 per cent) route email and identity through Microsoft 365, 8 per cent use Google Workspace, and 30 per cent run a custom or hybrid setup. Microsoft's presence on infrastructure the NHS depends on is roughly eight times Amazon's.

The more useful finding is the shape of the dependence rather than its size. Three-quarters of trusts, 162 of 213, depend on UK-sovereign infrastructure and on US-hosted services within reach of the US Cloud Act at the same time. Only 48 are cleanly sovereign; three are wholly US-dependent. Barts Health sits at one extreme with 304 records across four external suppliers; Alder Hey Children's Hospital at the other with 10 records, none external. A trust that size with a footprint that clean shows a different configuration is technically possible.

## Where the money goes, and where it does not

The second analysis looks at contract notices rather than connections. Computer Weekly's analysis of procurement data compiled by BidSkim covers £8.96 billion of UK public sector cloud-related contract value across 1,156 award notices between 2022 and 2026. Only £1.64 billion of that, 18 per cent, sits in contracts that both name a hyperscaler and carry a clean cloud-attributable value. The remaining £7.32 billion sits in framework ceilings, unpublished awards, bundled deals and partner work, none of which discloses a clean hyperscaler figure. BidSkim's own page counts Azure at £357 million across 99 contracts, not the £354 million across 96 the analysis states.

Within the traceable portion, AWS takes 75 per cent of the spend and wins 72 of its 90 contracts directly. Azure is named in 594 of the 1,156 notices, nearly twice AWS's 301, but 95 of its 96 traceable contracts arrive through resellers, and on the same measure it shows £354 million against AWS's £1.22 billion. Azure is the most-bought cloud in the dataset and the least attributable in it.

For the NHS specifically, a secondary report citing the Computer Weekly analysis puts hyperscaler cloud spending at £442 million in the most recent financial year. That figure does not appear in the published primary analysis and should be attributed to the report rather than the underlying data until a primary source states it.

The two pictures measure different things: DNS records show dependence, contract notices show what traces to a named supplier at a clean value.

## What procurement cannot see

The gap between those measurements is the story. Most public sector cloud contract value cannot be attributed to a hyperscaler from published data, not because the supplier is unknown but because cloud is bundled with software, support and integration inside single notices. A trust can be fully aware of its own contracts and still unable to state its exposure without doing the DNS work itself.

The analysis is explicit that it cannot say why the position arose. There is no evidence in the data for how services were chosen, only that the contracts renew on rolling terms and that the configuration persists across renewal. In parallel work, freedom of information responses from 37 English councils showed 32 had never run a competitive procurement in which an alternative to Microsoft could have won.

Three things remain genuinely unknown. First, what the NHS actually spends with each hyperscaler, as opposed to what its contracts disclose; the £442 million figure is a reported estimate, not a published return. Second, whether trusts have run competitive exercises for the services the DNS records reveal, since no dataset in either analysis captures procurement method. Third, what share of the 6,937 unattributed TXT records would change the supplier totals if resolved. The analysis calls its own hyperscaler numbers a lower bound for exactly that reason.

## Summary

The NHS's cloud dependence is measurable in DNS records and largely invisible in contract values, and those two facts explain why the same service can look both concentrated and competitive depending on which document you read.

- **Connections are not contracts.** DNS records show which suppliers a trust's systems depend on, not what it pays or whether it had a choice.
- **Microsoft is the default.** 165 of 213 trusts (77 per cent) connect to a hyperscaler, and Microsoft holds 1,889 routable records against Amazon's 229 and Google's 24.
- **The tangle is the finding.** 162 of 213 trusts depend on UK-sovereign infrastructure and US-hosted services at the same time; only 48 are cleanly sovereign.
- **Most money is unattributable.** Of £8.96 billion in cloud-related contract value, only £1.64 billion (18 per cent) traces cleanly to a named hyperscaler.
- **Azure is bought most and traced least.** It is named in 594 of 1,156 notices but 95 of its 96 traceable contracts arrive through resellers.

What is not known is what the NHS actually spends with each hyperscaler, whether trusts ran competitive exercises for the services the records reveal, and how much the unresolved records would change the totals. The analysis establishes the shape of the dependence and declines to infer the intent behind it. That restraint is the correct reading: the records prove the connections, and nothing in them proves a decision.

## Sources

- Adshead A. Data dive: Mapping NHS hyperscaler dependence. *Computer Weekly* (2026). https://www.computerweekly.com/news/366649921/Data-dive-Mapping-NHS-hyperscaler-dependence
- Adshead A. AWS wins direct while Azure is obscured: The UK's £9bn cloud spend. *Computer Weekly* (2026). https://www.computerweekly.com/news/366652563/AWS-wins-direct-while-Azure-is-obscured-The-UKs-9bn-cloud-spend
- Adshead A. Breaking the stranglehold: Responses to data sovereignty risk. *Computer Weekly* (2026). https://www.computerweekly.com/feature/Breaking-the-stranglehold-Responses-to-data-sovereignty-risk
- BidSkim. UK public sector cloud spend 2022-2026. *BidSkim* (2026). https://bidskim.com/research/uk-public-sector-cloud-spend-2022-2026
- NHS England. NHS provider directory. *NHS England* (2026). https://www.england.nhs.uk/publication/nhs-provider-directory/
- Macayan D. NHS leans on U.S. hyperscalers for £442Mn in cloud. *Outsource Accelerator* (2026). https://news.outsourceaccelerator.com/nhs-hyperscaler-cloud


---

*Fibios publishes analysis, not medical advice. Nothing here should be used to make a treatment decision; consult a qualified clinician.*

[About Fibios](about.md) · [Contact the editors](contact.md) · [Back to the homepage](index.md)
