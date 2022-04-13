from google.cloud import bigquery


def get_licences():
    client = bigquery.Client()
    query_job = client.query(
        """
            SELECT
            licenses.license as license,
            count(*) as total
            FROM
            `bigquery-public-data.github_repos.sample_repos` as
                    repo inner join `bigquery-public-data.github_repos.licenses`
                    as licenses on repo.repo_name = licenses.repo_name
            GROUP BY license
            order by total desc
            LIMIT 5
        """
    )
    results = query_job.result()
    data = {'labels': [], 'data': []}
    for row in results:
        data['labels'].append(row.license)
        data['data'].append(row.total)
    return data