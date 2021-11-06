with posts_created as (
    select 
        event_obj->'author'->>'name' as discord_handle, 
        count(1) as activity_count
    from webhook_event_cannys 
    where event_type = 'post.created' 
    group by 1 
    order by 2 desc
),
posts_deleted as (
    select 
        event_obj->'author'->>'name' as discord_handle, 
        count(1) as activity_count 
    from webhook_event_cannys 
    where event_type = 'post.deleted' 
    group by 1 
    order by 2 desc
),
comments_created as (
    select 
        event_obj->'author'->>'name' as discord_handle, 
        count(1) as activity_count 
    from webhook_event_cannys 
    where event_type = 'comment.created' 
    group by 1 
    order by 2 desc
),
comments_deleted as (
    select 
        event_obj->'author'->>'name' as discord_handle, 
        count(1) as activity_count 
    from webhook_event_cannys 
    where event_type = 'comment.deleted' 
    group by 1 
    order by 2 desc
),
votes_created as (
    select 
        event_obj->'voter'->>'name' as discord_handle, 
        count(1) as activity_count 
    from webhook_event_cannys 
    where event_type = 'vote.created' 
    group by 1 
    order by 2 desc
),
votes_deleted as (
    select 
        event_obj->'voter'->>'name' as discord_handle, 
        count(1) as activity_count 
    from webhook_event_cannys 
    where event_type = 'vote.deleted' 
    group by 1 
    order by 2 desc
)
select 
    u.discord_handle,    
    coalesce(coalesce(pc.activity_count, 0) - coalesce(pd.activity_count, 0), 0) as questions,
    coalesce(coalesce(vc.activity_count, 0) - coalesce(vd.activity_count, 0), 0) as votes,
    coalesce(coalesce(cc.activity_count, 0) - coalesce(cd.activity_count, 0), 0) as comments
from users u
left outer join posts_created pc on pc.discord_handle = u.discord_handle
left outer join posts_deleted pd on pd.discord_handle = u.discord_handle
left outer join comments_created cc on cc.discord_handle = u.discord_handle
left outer join comments_deleted cd on cd.discord_handle = u.discord_handle
left outer join votes_created vc on vc.discord_handle = u.discord_handle
left outer join votes_deleted vd on vd.discord_handle = u.discord_handle
order by 2 desc;

