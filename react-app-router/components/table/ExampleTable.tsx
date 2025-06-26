import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'
import Table from './Table'
import TableHead from './TableHead'
import TableRow from './TableRow'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableCell from './TableCell'
import Label from 'components/fieldset/Label'
import Avatar from 'components/avatar/Avatar'
import Badge from 'components/badge/Badge'
import Pagination from 'components/pagination/Pagination'
import PaginationPrevious from 'components/pagination/PaginationPrevious'
import { PaginationList } from 'components/pagination/PaginationList'
import PaginationPage from 'components/pagination/PaginationPage'
import { PaginationGap } from 'components/pagination/PaginationGap'
import { PaginationNext } from 'components/pagination/PaginationNext'
import Dropdown from 'components/dropdown/Dropdown'
import DropdownButton from 'components/dropdown/DropdownButton'
import DropdownMenu from 'components/dropdown/DropdownMenu'
import DropdownItem from 'components/dropdown/DropdownItem'
import DialogActions from 'components/dialog/DialogActions'
import Button from 'components/button/Button'
import Dialog from 'components/dialog/Dialog'
import DialogBody from 'components/dialog/DialogBody'
import DialogTitle from 'components/dialog/DialogTitle'
import DialogDescription from 'components/dialog/DialogDescription'
import { useState } from 'react'

const PLAYERS = [
  { rank: 1, name: 'Connor McDavid', position: 'C', gamesPlayed: 56, goals: 30, assists: 45, points: 75, plusMinus: 20 },
  { rank: 2, name: 'Auston Matthews', position: 'C', gamesPlayed: 58, goals: 28, assists: 40, points: 68, plusMinus: 15 },
  { rank: 3, name: 'Nathan MacKinnon', position: 'C', gamesPlayed: 55, goals: 25, assists: 42, points: 67, plusMinus: 18 },
  { rank: 4, name: 'Leon Draisaitl', position: 'C', gamesPlayed: 57, goals: 27, assists: 38, points: 65, plusMinus: 16 },
  { rank: 5, name: 'Sidney Crosby', position: 'C', gamesPlayed: 59, goals: 24, assists: 41, points: 65, plusMinus: 14 },
  { rank: 6, name: 'Alex Ovechkin', position: 'LW', gamesPlayed: 60, goals: 32, assists: 30, points: 62, plusMinus: 12 },
  { rank: 7, name: 'Patrick Kane', position: 'RW', gamesPlayed: 58, goals: 22, assists: 35, points: 57, plusMinus: -5 },
  { rank: 8, name: 'Brad Marchand', position: 'LW', gamesPlayed: 56, goals: 20, assists: 36, points: 56, plusMinus: -2 },
  { rank: 9, name: 'Steven Stamkos', position: 'C', gamesPlayed: '57', goals: '21', assists: '34', points: '55', plusMinus: '-3' },
  { rank: '10', name: 'Mark Scheifele', position: 'C', gamesPlayed: '59', goals: '19', assists: '35', points: '54', plusMinus: '-4' },
];

const USERS = [
  {
    handle: '4',
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    access: 'Owner',
    role: 'Co-Founder / CEO',
    avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
    online: true,
  },
  {
    handle: '5',
    name: 'Charlie White',
    email: 'charlie.white@example.com',
    access: 'Admin',
    role: 'Co-Founder / CTO',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
    online: false,
  },
  {
    handle: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    access: 'Admin',
    role: 'Administrator',
    avatarUrl: 'https://avatars.githubusercontent.com/u/3?v=4',
    online: true,
  },
  {
    handle: '2',
    name: 'Jane Smith',
    email: 'jane.smith@examle.com',
    access: 'User',
    role: 'Editor',
    avatarUrl: 'https://avatars.githubusercontent.com/u/4?v=4',
    online: false,
  },
  {
    handle: '3',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    access: 'Guest',
    role: 'Viewer',
    avatarUrl: 'https://avatars.githubusercontent.com/u/5?v=4',
    online: true,
  },
  {
    handle: '6',
    name: 'Diana Green',
    email: 'diana.green@example.com',
    access: 'User',
    role: 'Contributor',
    avatarUrl: 'https://avatars.githubusercontent.com/u/6?v=4',
    online: false,
  },
  {
    handle: '7',
    name: 'Ethan Blue',
    email: 'ethan.blue@example.com',
    access: 'Guest',
    role: 'Subscriber',
    avatarUrl: 'https://avatars.githubusercontent.com/u/7?v=4',
    online: true,
  }
]

export default function ExampleTable({
  users = USERS,
  players = PLAYERS,
}) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Label>Basic</Label>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Label>Responsive tables</Label>
      <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Handle</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Access</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>@{user.handle}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Label>With condensed spacing</Label>
      <Table dense className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
        <TableHead>
          <TableRow>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Player</TableHeader>
            <TableHeader className="text-right">Pos</TableHeader>
            <TableHeader className="text-right">GP</TableHeader>
            <TableHeader className="text-right">G</TableHeader>
            <TableHeader className="text-right">A</TableHeader>
            <TableHeader className="text-right">P</TableHeader>
            <TableHeader className="text-right">+/-</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.rank}>
              <TableCell className="tabular-nums">{player.rank}</TableCell>
              <TableCell className="font-medium">{player.name}</TableCell>
              <TableCell className="text-right">{player.position}</TableCell>
              <TableCell className="text-right tabular-nums">{player.gamesPlayed}</TableCell>
              <TableCell className="text-right tabular-nums">{player.goals}</TableCell>
              <TableCell className="text-right tabular-nums">{player.assists}</TableCell>
              <TableCell className="text-right tabular-nums">{player.points}</TableCell>
              <TableCell className="text-right tabular-nums">{player.plusMinus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Label>With striped rows</Label>
      <Table striped className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Label>With complex content</Label>
      <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Avatar src={user.avatarUrl} className="size-12" />
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-zinc-500">
                      <a href="#" className="hover:text-zinc-700">
                        {user.email}
                      </a>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
              <TableCell>
                {user.online ? <Badge color="lime">Online</Badge> : <Badge color="zinc">Offline</Badge>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Label>With pagination</Label>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Access</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-6">
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current>
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />
          <PaginationPage href="?page=65">65</PaginationPage>
          <PaginationPage href="?page=66">66</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>

      <label>With dropdowns</label>
      <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Access</TableHeader>
            <TableHeader className="relative w-0">
              <span className="sr-only">Actions</span>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
              <TableCell>
                <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisHorizontalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem>View</DropdownItem>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Label>In dialog</Label>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Show users
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen} size="3xl">
        <DialogTitle>Users</DialogTitle>
        <DialogDescription>The follow users have access to your account.</DialogDescription>
        <DialogBody>
          <Table bleed compact>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Role</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.handle}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="text-zinc-500">{user.access}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogBody>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}