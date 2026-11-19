---
title: What the Federated Data Platform Actually Federates
description: Federation here means separate hospital-level instances that choose what to share, not one national database holding every record.
keywords: federated data platform, nhs england, palantir, health data
---

# What the Federated Data Platform Actually Federates

The NHS Federated Data Platform is generally discussed as a single national system holding patient records. NHS England describes it differently: as a series of separate platforms, called instances, one for each hospital trust and integrated care board, with each organisation acting as data controller for its own. That distinction determines what the platform can do, and it is usually absent from both the defences and the criticisms.

## Separate instances, one national node

NHS England's infrastructure page states that the Federated Data Platform "is a series of separate data platforms that we call 'instances'". Every hospital trust and integrated care board has its own instance, and NHS England is responsible for the national instance. Each organisation with an instance can connect and share information with others where data protection law allows, for example when discharging a patient from hospital into a care setting.

The national instance replaces several legacy systems and feeds operational planning. Where data is shared nationally for that purpose, NHS England says separate privacy enhancing technology removes identifiable fields such as a patient's name and NHS number. A trust can also opt into particular products on its own instance.

The practical effect is a set of connected local systems with a national node attached. Records are not gathered into one store from which any participant can read anything. What moves between organisations is decided by those organisations, within the legal basis for sharing, and the national picture is assembled from de-identified data. Security is therefore a question about the weakest connected instance, not one central repository.

## What was contracted, and for how long

The contract was awarded to Palantir in November 2023, and the award notice records a start date of 22 November 2023. The same notice recorded an initial value of £182 million, with a forecast maximum of £330 million. NHS England's announcement said investment would be at least £25.6 million in the first contract year and up to £330 million over seven years, with rollout to NHS organisations described as beginning in spring 2024.

Two qualifications sit under those numbers. The Contracts Finder notice states that the £330 million "is also not a committed amount", because the authority pays for services as they are consumed under an agreed pricing schedule. The contract explainer states that while the maximum term is seven years, "only a three year term is committed, which can be extended by two years and then two further one year periods".

The initial three-year term expires in March 2027, and the award notice records a contract end date of 15 February 2027. NHS England's explainer states that any decision to extend will be taken by ministers in line with governance and regulatory processes. No extension decision had been published when this was written.

The maximum end date is where the accounts diverge. Reporting on the extension decision describes a contract running to 2029, while the contract explainer's seven-year term, with three years committed and then two years followed by two further one-year periods, places the potential end date at March 2031. Whether either is reached depends on the decision taken before February 2027.

What happens at the end of the term is a separate procurement. In August 2026 the Health Innovation Minister told the Health and Social Care Committee that normal procurement timelines made it unlikely a successor contract could be in place by March 2027. Continued use in the interim therefore depends on the extension being granted first.

## Three conditions that get reported as one

Reporting on the platform has repeatedly collapsed three different states into a single word. An organisation can hold a licence for the platform. It can have an instance running. It can have clinical or operational staff using one of its products in routine work. Those are separate conditions with separate evidence, and only the third produces the benefits the business case rests on.

NHS England's own reporting has not kept them apart. Until late 2026 the platform's benefits page carried a list naming 137 hospital trusts as live and realising benefits. Freedom of information requests by the medical charity Medact produced a different picture: 29 of the listed trusts said the platform was not live, or that they were using none of its applications. NHS England removed the list and replaced it with a shorter statement that early users are "already seeing real results".

The same conflation runs through the benefits figures. NHS England publishes two kinds of number for operational products: a count of actions taken by local users, such as records reviewed, and a modelled calculation of the product's impact on local performance. The second is an observational before-and-after comparison. The first measures activity rather than outcome. Neither, on the department's own account, establishes that the platform caused a change in care.

## The regulator's intervention on causality

The Office for Statistics Regulation opened casework on how NHS England presented platform-related benefits, after members of the public and journalists raised concerns. On 6 June 2026, NHS England added a sentence to its methods page: "We cannot therefore draw conclusions about cause and effect as other variables have not been controlled for." The sentence was added to every section where benefits depend on a before-and-after comparison.

The regulator recorded that the addition was welcome and that it understood why users read it as a significant change in how the benefits were being communicated. NHS England's benefits team acknowledged that more could be done, and agreed to carry a standing caveat on the main benefits page stating that the calculations are observational comparisons from which cause and effect cannot be concluded.

That is the reporting problem in one episode. A figure can be accurately calculated, honestly caveated, and still not support the claim a reader takes from it. The mechanism matters as much as the number, and the mechanism has been the part least often published.

## Summary

The Federated Data Platform is a network of locally controlled instances with a national node, and its contract commits three years of a possible seven.

- **The architecture is local.** NHS England describes an instance per trust and integrated care board, with each organisation as data controller for its own.
- **The money is a ceiling, not a commitment.** The £182 million award value can rise to £330 million, but the award notice states that figure is not committed.
- **The term is shorter than the headline.** Seven years is the maximum; three years are committed, and the initial term ends in March 2027.
- **The benefits list was removed, not corrected.** A page naming 137 trusts as live and realising benefits disappeared after 29 of those trusts disputed their status.
- **The regulator intervened on causality.** NHS England now states on its methods page that it cannot draw conclusions about cause and effect from the benefits figures.

What remains unpublished is how many trusts have signed, how many hold a running instance, and how many use it routinely. Those are three separate counts, and no single audited figure combines them. Whether the contract is extended beyond March 2027, and what replaces it if it is not, is also undecided in public.

## Sources

- NHS England. NHS Federated Data Platform infrastructure. *NHS England* (2026). https://www.england.nhs.uk/digitaltechnology/nhs-federated-data-platform/nhs-fdp-explained/how-does-the-nhs-federated-data-platform-work/
- NHS England. Contract explainer: what is the Government's position on extending the NHS FDP contract? *NHS England* (2026). https://www.england.nhs.uk/digitaltechnology/nhs-federated-data-platform/security-privacy/contract-explainer/
- NHS England. New NHS software to improve care for millions of patients. *NHS England* (2023). https://www.england.nhs.uk/2023/11/new-nhs-software-to-improve-care-for-millions-of-patients/
- NHS England. Contract award notice: Federated Data Platform. *Contracts Finder* (2023). https://www.contractsfinder.service.gov.uk/Notice/0f8a65b5-23a2-4294-abb1-a7fd8efb3ad0
- NHS England. Methodology: uptake and benefits information. *NHS England* (2026). https://www.england.nhs.uk/digitaltechnology/nhs-federated-data-platform/impact/fdp-uptake-and-benefits/methodology-uptake-and-benefits-information/
- Office for Statistics Regulation. NHS England Federated Data Platform (FDP): presentation and communication of information and performance metrics. *UK Statistics Authority* (2026). https://osr.statisticsauthority.gov.uk/news/nhs-england-federated-data-platform-fdp-presentation-and-communication-of-information-and-performance-metrics/
- Booth R, Campbell D. NHS England deletes 'misleading' claim 137 trusts benefiting from Palantir AI tools. *The Guardian* (2026). https://www.theguardian.com/technology/2026/nov/12/nhs-england-deletes-misleading-claim-137-trusts-benefiting-from-palantir-ai-tools
- Lowdown NHS. Palantir: the controversy, the contracts and the campaign. *Lowdown NHS* (2026). https://lowdownnhs.info/topics/accountablility/palantir-the-controversy-the-contracts-and-the-campaign
- Gajjar D, Powell T. What's happening with the NHS Federated Data Platform? *House of Commons Library* (2026). https://commonslibrary.parliament.uk/research-briefings/cbp-12264/

---

*Fibios publishes analysis, not medical advice. Nothing here should be used to make a treatment decision; consult a qualified clinician.*

[About Fibios](about.md) · [Contact the editors](contact.md) · [Back to the homepage](index.md)
