<form action="{{ route ('set_language', $lang) }}" method="POST">
    @csrf
    <li class="text-white-50" type="submit">
        <button class="btn btn-warning btn-sm mb-2" type="submit">
            <span>{{ $nation }}</span>
        </button>
    </li>
</form>
