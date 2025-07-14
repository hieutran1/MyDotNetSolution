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
import { Subheading } from '../heading'
import { USERS, PLAYERS } from '../../test-data'

export default function ExampleTable({
  users = USERS,
  players = PLAYERS,
}) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Subheading>Basic</Subheading>
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

      <Subheading>Responsive tables</Subheading>
      <div className='mx-auto max-w-xl'>
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
      </div>

      <Subheading>With condensed spacing</Subheading>
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

      <Subheading>With striped rows</Subheading>
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
            <TableRow key={user.handle} striped>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Subheading>With complex content</Subheading>
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

      <Subheading>With pagination</Subheading>
      <div className='w-full'>
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
            <PaginationPage href="?page=66">66</PaginationPage>
            <PaginationPage href="?page=66">66</PaginationPage>
            <PaginationPage href="?page=66">66</PaginationPage>
          </PaginationList>
          <PaginationNext href="?page=4" />
        </Pagination>
      </div>

      <Subheading>With dropdowns</Subheading>
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

      <Subheading>In dialog</Subheading>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Show users
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen} size="2xl">
        <DialogTitle>Users</DialogTitle>
        <DialogDescription>The follow users have access to your account.</DialogDescription>
        <DialogBody>
          <Table bleed compact>
            <TableHead>
              <TableRow>
                <TableHeader bleed>Name</TableHeader>
                <TableHeader bleed>Email</TableHeader>
                <TableHeader bleed>Role</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.handle}>
                  <TableCell className="font-medium" bleed>{user.name}</TableCell>
                  <TableCell bleed>{user.email}</TableCell>
                  <TableCell className="text-zinc-500" bleed>{user.access}</TableCell>
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